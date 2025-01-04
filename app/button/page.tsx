import { Button } from "@/components/ui/button";
import { ChevronDownCircleIcon, ChevronRight, ChevronUpSquareIcon, Download, DownloadCloud, DownloadIcon, Loader2, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Buttons() {
  return (
   <div className="p-4 space-y-4 bg-gray-100 dark:bg-gray-800 space-x-4">
    <h1 className="text-2xl">Button section </h1>
    <Button className="">Button</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button variant="outline" size="icon">
      <ChevronRight />
    </Button>
    <Button>
      <Mail /> Login with Email
    </Button>
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
    <Button asChild className="bg-purple-600 hover:bg-orange-600">
      <Link href="/">Home</Link>
    </Button>
    <Button>
      <DownloadCloud /> Download
    </Button>
   </div>
  );
}
