'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { createCredential } from "app/api/credentials/create-credentials";
import { useRouter } from "next/navigation";

export default function EmailCredential() {
  const router = useRouter()
  const [processing, setProcessing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: any) => {
    setProcessing(true);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setProcessing(false);
      return;
    }

    if (!isChecked) {
      setError('You must confirm that you own this email address.');
      setProcessing(false);
      return;
    }

    try {
      await createCredential({provider: `email~${email}`, handler: email, kind: 'email'});
    } catch (error) {
      console.log(error);
      setError('Failed to add email. Please try again.');
      setProcessing(false);
      return;
    }

    setProcessing(false);
    router.push('/credentials');  // Redirect to the /credentials page
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Confirm Your Email</CardTitle>
        <CardDescription>Please enter your email below to receive a confirmation link</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          {error && <div style={{color: 'red'}}>{error}</div>}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="confirm" checked={isChecked} onClick={() => setIsChecked(!isChecked)}/>
              <div className="space-y-1 leading-none">
                <Label htmlFor="confirm">I confirm that I own this email address</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By checking this box, you authorize us to send a confirmation email to the provided address.
                </p>
              </div>
            </div>
            <Button className="w-full" type="submit" disabled={processing || !isChecked} onClick={handleSubmit}>
              Confirm
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please check your inbox and spam folder for a confirmation email after clicking the confirm button.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

