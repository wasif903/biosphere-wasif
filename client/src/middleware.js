import { NextResponse } from 'next/server'

export function middleware(request) {
    const { pathname } = request.nextUrl

    const subscribedRoutes = ['/dashboard', "/add-product", "/billing-details", "/category-list", "/order-list", "/pricing", "/product-list", "/store-profile", "/wallet"]

    const AdminRoutes = ['/dashboard', "/store-list", "/store-list/:path*", "/pricing", "/store-profile", "/wallet", "/chat", "/chat/:path"]

    const authValidator = ['/pricing', 'billing-details', "/kyc-verification"]

    const cookieValue = request.cookies.get('biosphereearth')?.value

    const userDetail = cookieValue ? JSON.parse(cookieValue) : undefined

    let url = request.nextUrl.clone()

    if (!userDetail) {
        if (subscribedRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }

    } else if (cookieValue) {
        if (userDetail?.verified === false && userDetail?.role[0] === 'StoreOwner') {
            url.pathname = "/kyc-verification";
            return NextResponse.rewrite(url);
        } else if (userDetail?.verified === true && userDetail?.role[0] === 'StoreOwner' && userDetail?.accountID === "") {
            url.pathname = "/pricing";
            return NextResponse.rewrite(url);
        } else if (userDetail?.verified === true && userDetail?.role[0] === 'StoreOwner' && userDetail?.accountID !== "") {
            if (pathname.startsWith("/auth")) {
                return NextResponse.redirect(new URL('/dashboard', request.url))
            }
            if (authValidator.includes(pathname)) {
                return NextResponse.redirect(new URL('/dashboard', request.url))
            }
        }

        // // Validations For Admin Role
        // if (userDetail?.role[0] === 'Admin' && !AdminRoutes.includes(pathname)) {
        //     return NextResponse.redirect(new URL('/dashboard', request.url))
        // }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', "/auth", '/auth/login', '/auth/sign-up', '/auth/forgot-password', '/auth/verify-otp', '/auth/set-password', "/auth/verify-store", '/dashboard', "/add-product", "/billing-details", "/category-list", "/kyc-verification", "/order-list", "/order-list/:path*", "/pricing", "/product-list", "/store-profile", "/wallet", "/store-list", "/store-list/:path*", "/chat", "/chat/:path"],
}
