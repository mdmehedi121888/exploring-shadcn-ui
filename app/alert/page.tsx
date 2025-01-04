import { AlertCircle, Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
 
  export default function Alerts() {
    return (
        <>
        <h1 className="text-2xl text-center text-3xl font-bold my-10">Alert  section </h1>
      <div className="w-[50%] mx-auto my-10 p-4 space-y-4 bg-gray-100 dark:bg-gray-800 space-x-4">
      <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
      </div></>
       
    )
  }
  