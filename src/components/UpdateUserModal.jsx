"use client";

import { authClient } from "@/lib/auth-client";
import { CircleCheckFill, Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUserCircle } from "react-icons/bi";
import { PiRobotFill } from "react-icons/pi";

export function UpdateUserModal() {
  const onSubmit = async(e) => {
    e.preventDefault();

    const name = e.target.name.value;   
    const image = e.target.image.value;

      console.log(name, image);
      await authClient.updateUser({
    image: image,
    name: name,
})
  };
  return (
    <Modal>
      <Button variant="secondary">
        <BiEdit /> Update Your Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUserCircle className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form to update your profile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                 
                  <TextField type="url" className="w-full" name="image">
                    <Label>Profile Photo</Label>
                    <Input placeholder="Enter your image url" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">Save Changes</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
