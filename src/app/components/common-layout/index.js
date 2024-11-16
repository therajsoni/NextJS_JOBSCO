import Header from "../header";

export default function CommonLayout({children}){
    return <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Header component */}
        <Header/>                       
        {/* Main component */}
        <main>{children}</main>
        {/* Footer component */}
        
    </div>
}