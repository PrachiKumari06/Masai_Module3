// import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function App() {
  const n=["a","b","c"]
  return (
    <div>
      {/* <Button>Click me</Button> */}
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Hi I am Prachii Btech Student</CardDescription>
    <CardAction>{n}</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content : these are name of student</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
    </div>
  )
}

export default App