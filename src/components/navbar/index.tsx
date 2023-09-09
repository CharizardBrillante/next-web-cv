//@ts-nocheck
import { FC } from "react";
import { Dock } from "@/components/navbar/Dock";
import { DockCard } from "@/components/navbar/DockCard";
import { Card } from "@/components/navbar/Card";
import { DockDivider } from "@/components/navbar/DockDivider";


const Navbar : FC = ({onRoute}) => {
    const GRADIENTS = [
        'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg',
        'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg',
        'https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg',
        'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg',
        'https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg',
        null,
        'https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg',
    ]
    const LINKS = [
        "/education",
        "/work-experience",
        "/skills",
        "/portfolio",
        "/reviews",
        "",
        "/"
    ]
    return (
        <Dock>
            {GRADIENTS.map((src, index) =>
            src ? (
                <DockCard key={src}>
                    <Card src={src} link={LINKS[index]} index={index} onRoute={onRoute}/>
                </DockCard>
            ) : (
                <DockDivider key={index} />
            )
            )}
        </Dock>
    )
}

export default Navbar;