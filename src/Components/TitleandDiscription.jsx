
import { useState } from 'react';
import './TitleDiscription.css';

export const TitleDiscription = ({ article, onClose, onUpdate }) => {

    const [title, setTitle] = useState(article.title);
    const [body, setBody] = useState(article.body);
    const [isupdate, setUpdate] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedArticle = {
            ...article,
            title,
            body
        };

        try {
            setUpdate(true);
            await onUpdate(updatedArticle);
            onClose();
        } catch (error) {
            console.log("Update failed:", error);
        }  finally{
            setUpdate(false)
        }
    };

    return (
        <div className="model-overlay">
            <div className="detailbox">

                <h2>Edit Article</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />

                    <button type="submit" disabled={isupdate}>
                      {isupdate ? "Updating..." : "Update Article"}
                    </button>

                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>

                </form>
            </div>
        </div>
    );
};
