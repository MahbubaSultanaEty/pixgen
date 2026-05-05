"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";


const SignInPage = () => {
   const onSubmit = async (e) => {
       e.preventDefault();      
       
       const email = e.target.email.value;
       const password = e.target.password.value
       
       const { data, error } = await authClient.signIn.email({          
           email,           
           password,
           callbackURL: "/"
       });   
       if (error) {
           alert("Invalid Credentials")
       }
       if (data) {
           alert("SignIn Successfull")
       }
       console.log(data, error);
   };
 
  const handleGoogleSignIn = async() => {
    const data = await authClient.signIn.social({
      provider: "google",
    })
  }
    
    return (
         <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        </Form>
        
         <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-500">OR</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        
              {/* sign up with google */}
               <button
                onClick={handleGoogleSignIn}
                  className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
                >
                  <Image
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      width={20}
                      height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>
    </Card>
    );
};

export default SignInPage