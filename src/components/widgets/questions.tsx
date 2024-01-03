"use client"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const questions = [
  {
    question: "What is the POXME token migration?",
    answer: "The POXME token migration is a transition from our old token to a new one that complies with ERC/BEP-20 standards. This migration is to enhance security, utility, and overall user experience within the POXME ecosystem."
  },
  {
    question: "When does the migration start and end?",
    answer: "The migration begins on January 6th at 22:00 UTC. The end date will be announced, and we encourage early participation due to increasing burning tax over time."
  },
  {
    question: "What is the migration ratio?",
    answer: "The migration is conducted at a 1:1 ratio. Every token you deposit will be converted to a new token. For example if you deposit 16 $EULER you'll receive 16 $POXME."
  },
  {
    question: "How do I migrate my tokens?",
    answer: "To migrate your tokens, visit the official migration portal provided by POXME, ensure you're connected to the correct network, and follow the step-by-step instructions. Always make sure to use official links to avoid scams."
  },
  {
    question: "Will there be any fees associated with migrating?",
    answer: "There is a burning tax applied to the migration process, which increases over time. Migrating early ensures you pay a lower burning tax. Network fees for the transaction will also apply."
  },
  {
    question: "What happens if I don't migrate my tokens?",
    answer: "Tokens that are not migrated before the end of the migration period may lose functionality and won't be supported in the new ecosystem. We strongly advise migrating your tokens to continue enjoying the full benefits of the POXME protocol."
  },
  {
    question: "Is the migration mandatory?",
    answer: "Yes, to continue accessing the full suite of features and maintaining the value of your assets within the POXME ecosystem, participating in the migration is necessary."
  },
  {
    question: "What are the benefits of migrating early?",
    answer: "Migrating early allows you to benefit from a lower burning tax, ensuring more of your tokens are preserved during the migration. It also ensures you're immediately part of the enhanced and more secure ecosystem."
  },
  {
    question: "Can I migrate my tokens after the initial migration period has ended?",
    answer: "The ability to migrate after the end date is subject to community governance decisions. Keep an eye on official announcements for any changes or extensions to the migration period."
  },
  {
    "question": "What is the Proof of X token?",
    "answer": "The Proof of X token represents investment in the project. Its primary purpose is to provide liquidity to the project and serve as a medium for lending and borrowing memberships."
  },
  {
    "question": "What is the NFT membership?",
    "answer": "The NFT membership signifies affiliation with the Proof of X project. It is a unique token used to access the project's features and benefits. Each account holder in the project requires a membership as they are distinct. Given the nature of memberships, an infinite number can exist, with each representing a different account name."
  },
  {
    "question": "What is the NFT affiliation?",
    "answer": "The NFT affiliation denotes a connection to the Proof of X project. It is a unique token used to claim rewards from the protocol. Each account holder in the project requires an affiliation as they are unique. Affiliate NFTs are limited to 2,500 units and are distributed on a first-come, first-served basis."
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
