import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Pen, Mail, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

export default function Profile() {
  const isResume = true;
  const { user } = useSelector((store) => store.auth);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="data:image/png;base64,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" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullName}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOrignalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl ">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobsTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
}
