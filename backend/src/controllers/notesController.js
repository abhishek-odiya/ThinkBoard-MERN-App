import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });    // -1 will sort in desc. order (newest first)
        res.status(200).send(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getNotesById(req, res) {
    try {
        const getNotes = await Note.findById(req.params.id);
        if (!getNotes) return res.status(404).json({ message: "Note Not found on this id" });
        res.status(200).json({ message: "Note is found successfully", getNotes })
    } catch (error) {
        console.error("Error in getNotesById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export async function createNotes(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        // to view the content on the postman
        // await newNote.save();

        const savedNote = await note.save();

        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateNotes(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true, });

        if (!updatedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json({ message: "Note Updated successfully", updatedNote });

    } catch (error) {
        console.error("Error in updateNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteNotes(req, res) {
    try {

        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error in updateNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}