import { notFound } from "next/navigation";

interface Params {
    masshack: string;
}

export async function generateMetadata({
    params 
}: { 
    params: Promise<Params> 
}) {
    const { masshack } = await params;
    const hack = parseInt(masshack, 10);
    if (isNaN(hack)) {
        return { title: "Invalid Hack" };
    }
    return {
        title: `Maas Kalab | Maas Hack - ${hack}`,
    };
}

export default async function MassHackName({
    params
}: {
    params: Promise<Params>;
}) {
    const { masshack } = await params;
    const hack = parseInt(masshack, 10);
    if (isNaN(hack) || hack === 0 || !/^\d+$/.test(masshack)) {
        notFound();
    }

    return (
        <div>
            <div>
                This is the page for mass hack <b>{hack}.0</b>
            </div> 
        </div>
    );
}