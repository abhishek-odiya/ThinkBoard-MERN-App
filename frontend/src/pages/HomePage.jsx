import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import api from '../lib/axios';
import toast from "react-hot-toast";
import NotesNotFound from '../components/NotesNotFound';
import NoteCard from "../components/NoteCard";

import { ZapIcon } from 'lucide-react';


const HomePage = () => {

    const [isRateLimited, setIsRateLimited] = useState(true);
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get("/notes");
                console.log(res.data);
                setNotes(res.data)
                setIsRateLimited(false)

            } catch (error) {
                console.log("Error fetching notes");
                console.log(error)
                if (error.response?.status === 429) {
                    setIsRateLimited(true)
                } else {
                    toast.error("Failed to load notes")
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    return <div className="min-h-screen">
        <Navbar />



        <div className='max-w-7xl mx-auto h-500 p-4 mt-6'>

            {/* For loading */}
            {loading && <div className="hero h-500 py-40">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='p-20 flex items-center justify-center'>
                        <span className="loading loading-ring loading-lg text-primary"></ span>
                        Loading Notes...
                    </div>
                </div>
            </div>}

            {/* for rate limit page */}
            {isRateLimited && <RateLimitedUI />}


            {/* fro NoteNotFound */}
            {notes.length === 0 && !isRateLimited && <NotesNotFound />}

            {/* for loading (when the data is fetching from the server) */}
            {notes.length > 0 && !isRateLimited && (
                <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {notes.map((note) => (
                        <NoteCard key={note._id} note={note} setNotes={setNotes} />
                    ))}
                </div>
            )}

        </div>

    </div >
};

export default HomePage;