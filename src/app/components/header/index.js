'use client';
import {Sheet,SheetTrigger,SheetContent} from "../../../components/ui/sheet";
import {Button} from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import Link from "next/link";
function Header() {
    const menuItems = [
        {
            label : 'Home',
            path : '/',
            show : true
        },
        {
            label : 'Login',
            path : '/sign-in',
            show : true
        },
        {
            label : 'Register',
            path : '/sign-up',
            show : true
        }
    ]
    return <div>
        <header className="items-center shrink-0 w-full h-16 flex">
       <Sheet>
        <SheetTrigger asChild>
<Button>
<AlignJustify className="h-6 w-6" />
<span className="sr-only"></span>
</Button>
        </SheetTrigger>
        <SheetContent side="left">
<Link className="mr-6 hidden lg:flex" href={`#`}>JOBSCO</Link>
<div className="grid gap-2 py-6">
{
    menuItems?.map((menuItem)=>menuItem?.show ? 
    <Link key={menuItem?.path} href={menuItem?.path} className="flex w-full items-center py-2 text-lg font-semibold">
    {menuItem?.label}   
    </Link>
    : null)
}
</div>
        </SheetContent>
       </Sheet>
       <Link href={'/'} className="" >JOBSCO</Link>
        </header>
    </div>
}
export default Header;