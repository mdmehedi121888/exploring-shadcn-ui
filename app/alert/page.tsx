import { AlertCircle, SquareX, StepForward, Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
 
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
      </div>

      <h1 className="text-2xl text-center text-3xl font-bold my-10">Alert Dialog section </h1>
      <div className="w-[50%] mx-auto my-10 p-4 space-y-4 bg-gray-100 dark:bg-gray-800 space-x-4">
      <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel><SquareX /></AlertDialogCancel>
          <AlertDialogAction><StepForward /></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </div>
      
      </>
       
    )
  }
  