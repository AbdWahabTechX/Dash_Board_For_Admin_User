
import { useState } from 'react';
import './NewArticle.css';

export const NewArticle = ({ onClose, onAddArticle }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const handleSubmitPost = (e) =>{
        e.preventDefault();

         if (!title.trim() || !description.trim()) {
            alert("Please fill all fields");
            return;
        }

        const newArticle = {
            title: title,
            body: body
        }

        onAddArticle(newArticle);

        setTitle("");
        setBody("");

        onclose(false);
    }

    return (
        <div className="modal-overlay">

            <div className="article-form">

                <div className="form-header">
                    <h2>Create New Article</h2>

                    <button onClick={onClose}>×</button>
                </div>

                <form onSubmit={handleSubmitPost}>

                    <div className="form-group">
                        <label>Article Title</label>
                        <input
                            type="text"
                            placeholder="Enter article title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Article Description</label>
                        <textarea
                            placeholder="Write your article..."
                            rows="5"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>

                    <div className="form-buttons">
                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit">
                            Publish Article
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
};
