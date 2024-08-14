import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon, UserIcon } from "lucide-react";

const Header = () => {
    return (
        <div>
            <Card>
                <CardContent className="mt-2 py-4 justify-between items-center flex flex-row gap-5">
                    <Image src={'/moneytracker.png'} width={200} height={50} alt="logo"/>
                    <div className="ml-auto">
                        <h1 className="font-semibold">imStoorm</h1>
                        <p className="text-xs">exemplo@gmail.com</p>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline">
                                <UserIcon/>
                            </Button>
                        </SheetTrigger>
                        {/*'<SideBarSheet/>'*/}
                    </Sheet>
                </CardContent>
            </Card>
        </div>
        
    );
}
 
export default Header