
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Server, X } from "lucide-react"

const ProjectGithunDialog = ({showDialog, close , title, description, server, client}: {showDialog: boolean, close: () => void, title?: string, description?: string, server?: string, client?: string }) => {
  
  const handleClient = () => {
    window.open(client, '_blank')
  }
   const handleServer = () => {
    window.open(server, '_blank')
  }
  const backDropVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }
  const contentVariant = {
    hidden: {opacity: 0, scale:0.9, y:-20},
   visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } }
  }
  return (
    <AnimatePresence>
      <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
        variants={backDropVariants}
        animate='visible'
        initial='hidden'
        exit='hidden'
      >
        <motion.div
        className='bg-white rounded-lg shadow-lg w-80 p-6'
        variants={contentVariant}
        animate='visible'
        initial="hidden"
        exit="hidden"
        >
   <AlertDialog open={showDialog}>
  <AlertDialogContent className="sm:max-w-md rounded-xl">

    <AlertDialogHeader className="text-center">
      <AlertDialogTitle className="text-xl font-bold flex items-center justify-center gap-2">
        <Github className="w-5 h-5" />
        {title}
      </AlertDialogTitle>

      <AlertDialogDescription className="text-gray-500">
        {description}
      </AlertDialogDescription>
    </AlertDialogHeader>

    {/* Buttons */}
    <div className="flex flex-col gap-3 mt-4">

      <AlertDialogAction asChild>
        <Button
          onClick={handleClient}
          className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <Github className="w-4 h-4" />
          Client Code
        </Button>
      </AlertDialogAction>

      <AlertDialogAction asChild>
        <Button
          onClick={handleServer}
          className="w-full flex items-center gap-2 bg-green-600 hover:bg-green-700"
        >
          <Server className="w-4 h-4" />
          Server Code
        </Button>
      </AlertDialogAction>

    </div>

    <AlertDialogFooter className="mt-4">
      <AlertDialogCancel
        onClick={close}
        className="w-full flex items-center gap-2"
      >
        <X className="w-4 h-4" />
        Cancel
      </AlertDialogCancel>
    </AlertDialogFooter>

  </AlertDialogContent>
</AlertDialog>


        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectGithunDialog

