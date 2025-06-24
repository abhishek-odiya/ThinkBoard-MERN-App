import React from 'react'
import { Notebook } from 'lucide-react';
import { Link } from "react-router";

const NotesNotFound = () => {
  return <div className="hero bg-base-80">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <div className="flex justify-center items-center h-40">
          <Notebook size={70} className="text-blue-500 " />
        </div>

        <h3 className="text-5xl font-bold">No Notes yet</h3>
        <p className="py-5">
          Ready to organize your thoughts? Create your first note to get started on your journey.
        </p>

        <Link to="/create" className="btn btn-primary">
          Get Your First Note
        </Link>
      </div>
    </div>
  </div>
}

export default NotesNotFound;