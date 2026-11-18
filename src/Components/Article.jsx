
import { useState } from 'react';
import { deletePost } from '../Api/Post';
import './Articles.css';
import { TitleDiscription } from './TitleandDiscription';

export const Articles = ({ postdata = [], onDelete, onUpdate }) => {

    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleDeletepost = async (id) => {
        try {
            const res = await deletePost(id);

            if (res.status === 200 || res.status === 204) {
                onDelete(id);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="Articles-section">

            <div className="title-header">
                <div className="title">
                    <h1>Recent Articles</h1>
                </div>

                <div className="view-btn">
                    <button>View All</button>
                </div>
            </div>

            <div className="article-list">
                <div className="article">
                    <ul>
                        {postdata.map((curEle) => {
                            const { id, title } = curEle;

                            return (
                                <li key={id}>
                                    <p>{title}</p>

                                    <div className="article-btns">

                                        <button
                                            className="seeMore"
                                            onClick={() => setSelectedArticle(curEle)}
                                        >
                                            See More information
                                        </button>

                                        <button
                                            onClick={() => setSelectedArticle(curEle)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDeletepost(id)}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {selectedArticle && (
                <TitleDiscription
                    article={selectedArticle}
                    onClose={() => setSelectedArticle(null)}
                    onUpdate={onUpdate}
                />
            )}

        </section>
    );
};
