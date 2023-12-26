"use client"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const questions = [
  {
    question: "What is the migration process?",
    answer: "The migration process is the process of converting the old $EULER tokens to the new Proof of X tokens, and the NFTs that represent the membership and affiliation of the Proof of X project."
  },
  {
    question: "What is the Proof of X token?",
    answer: "The Proof of X token represents the investment in the project, the unique goal of the token is to provide liquidity to the project and to be used as a lending and vehicle when borrowing memberships"
  },
  {
    question: "What is the NFT membership?",
    answer: "The NFT membership represents the membership of the Proof of X project, it is a unique token that can be used to access the project's features and benefits. Every account handler in the project needs a membership to exists as they are unique. Due to the nature of memberships, infinite memberships can exist as each one can represent a different account name"
  },
  {

    question: "What is the NFT affiliation?",
    answer: "The NFT affiliation represents the affiliation of the Proof of X project, it is a unique token that can be used to claim rewards from the protocol. Every account handler in the project needs an affiliation to exists as they are unique. The Affiliates NFTs are limited to 2.500 units, and they are distributed in a first-come-first-serve basis."
  }
]

export default function Questions() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold text-gray-900 text-center">Frequently Asked Questions</h1>
      <div className="mt-6 space-y-6 w-full">
        {questions.map((question, index, array) => (
          <Collapsible className="border rounded-md shadow-sm" key={index}>
            <CollapsibleTrigger className="flex items-center justify-between p-4">
              <h2 className="text-lg font-medium text-gray-700">{question.question}</h2>
              <Button size="sm" variant="ghost">
                <ArrowDownIcon className="w-4 h-4"/>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <p className="text-sm text-gray-500">
                {question.answer}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </main>
  )
}

function ArrowDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14"/>
      <path d="m19 12-7 7-7-7"/>
    </svg>
  )
}
