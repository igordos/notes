import mongoose from 'mongoose';
import config from '../../etc/config.json';
import '../models/Notes';

const  Note = mongoose.model('Note');

export function setUpConnections() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createDate: data.createDate,
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}