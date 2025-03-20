import React, { useState } from 'react'
import './MainNotesSectionStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from '../../redux/slices/noteSlices'
import { getNotes } from '../../utils/getNotes'
import noteButton from "../../assets/vector/note_button.png"
import noteButtonSecond from "../../assets/vector/note_button_second.png"
import arrowButton from '../../assets/vector/arrow_button.png'
import { setCurrentGroupId } from '../../redux/slices/groupSlices'

const MainNotesSection = () => {

    const dispatch = useDispatch();
    const [noteContent, setNoteContent] = useState('');

    const currentGroupId = useSelector((state) => {
        return state.group.selectedGroupId;
    })
    const allNotes = useSelector((state) => {
        return state.note.notes
    })
    const allGroups = useSelector((state) => {
        return state.group.groups;
    })

    const singleGroup = allGroups.find((group) => group.id === currentGroupId);
    const currentGroupNotes = getNotes(allNotes, currentGroupId);

    const getNoteContent = (e) => {
        setNoteContent(e.target.value);
    }

    const clickNoteButton = () => {
        dispatch(addNote({ groupId: currentGroupId, content: noteContent }));
        setNoteContent("");
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter' && noteContent.trim() && !e.shiftKey) {
            e.preventDefault();
            clickNoteButton();

        }
    }

    const goBack = () => {
        dispatch(setCurrentGroupId(null));
    }

    return (
        <div className='main-notes-section'>
            <div className="heading">

                <div className='group-heading'>
                <button onClick={goBack} className="go-back">
                    <img src={arrowButton} alt="" />
                </button>
                    <div style={{ backgroundColor: singleGroup.color }} className="group-dp">
                        <h3>{singleGroup.displayPicture}</h3>
                    </div>
                    <h3 className='group-h3'>{singleGroup.name}</h3>
                </div>

            </div>

            <div className="note-content">
                {currentGroupNotes && currentGroupNotes.map((note) => {
                    return <div className='note-content-area' key={note.id}>
                        <h5>{note.content}</h5>
                        <h5 className='date-time'>
                            {new Date(note.createdAt).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                            <span style={{ margin: '0 5px' }}>•</span>
                            {new Date(note.createdAt).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                        </h5>
                    </div>;
                })}
            </div>


            <div className="add-new-note">
                <textarea onChange={getNoteContent} name="" id=""
                    placeholder=' Enter your text here' value={noteContent}
                    onKeyDown={onKeyDown} ></textarea>

                <button onClick={clickNoteButton}
                    disabled={!noteContent.trim()}>

                    {noteContent.trim() ? <img src={noteButtonSecond} alt="" /> : <img src={noteButton} alt="" />}

                </button>

            </div>

        </div>
    )
}

export default MainNotesSection