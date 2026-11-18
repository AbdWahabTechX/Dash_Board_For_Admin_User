
import { useEffect, useState } from 'react';
import { getPost, UpdatePost } from '../Api/Post';
import './Maincontent.css';
import { Articles } from './Article';
import { NewArticle } from './Add';

export const Main = () => {

    const [postdata, setPostdata] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const getPostdata = async () => {
        try {
            const apidata = await getPost();
            console.log(apidata);
            setPostdata(apidata.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPostdata();
    }, []);

    const handleDelete = (id) => {
        setPostdata((prevPosts) => {
            return prevPosts.filter((curPost) => {
                return curPost.id !== id;
            });
        });
    };

    const handleAddArticles = (newArticle) => {
        const newPostwithID = {
            ...newArticle,
            id: Date.now()
        };

        setPostdata((prevPost) => [
            newPostwithID,
            ...prevPost
        ]);
    };

 
const handleUpdateArticle = async (updatedArticle) => {
    try {
        const res = await UpdatePost(updatedArticle.id, {
            title: updatedArticle.title,
            body: updatedArticle.body,
            userId: updatedArticle.userId
        });

        if (res.status === 200) {

            setPostdata((prevPosts) =>
                prevPosts.map((curPost) =>
                    curPost.id === updatedArticle.id
                        ? { ...curPost, ...updatedArticle }
                        : curPost
                )
            );

            console.log("Article updated successfully!");

        } else {
            throw new Error("Article not updated");
        }

    } catch (error) {
        console.log("Update error:", error);
        throw error;
    }
};

    return (
        <section className="main-section">

            <div className="overview">
                <div className="title">
                    <h1>Dashboard</h1>
                    <p>Overview of your publishing activity</p>
                </div>

                <div className="new-btn">
                    <button onClick={() => setShowForm(true)}>
                        + New Article
                    </button>
                </div>
            </div>

            <div className="show-counts">

                <div className="count-box">
                    <h2>{postdata.length}</h2>
                    <p>Total Articles</p>
                </div>

                <div className="count-box">
                    <h2>{postdata.length}</h2>
                    <p>Published</p>
                </div>

                <div className="count-box">
                    <h2>4</h2>
                    <p>Authors</p>
                </div>

                <div className="count-box">
                    <h2>20</h2>
                    <p>Tags</p>
                </div>

            </div>

            <Articles
                onDelete={handleDelete}
                postdata={postdata}
                onUpdate={handleUpdateArticle}
            />

            {showForm && (
                <NewArticle
                    onAddArticle={handleAddArticles}
                    onClose={() => setShowForm(false)}
                />
            )}

        </section>
    );
};
