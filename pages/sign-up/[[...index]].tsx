import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-semibold text-white">Log In to GPT TIM</h1>
        <SignUp />
      </div>
    </div>
  )
}
