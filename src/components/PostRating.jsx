import React from 'react'
import { useAddRating } from '../custom/AddRating'
import './Rating.css'
import { useState } from 'react'

const PostRating = ({ movieId }) => {
    const { rating, setRating, submitrating } = useAddRating()
    const [hide, setHide] = useState(false)
    console.log(rating);
    return (
        <div className='rating'>
            <button onClick={() => setHide(!hide)}>Add Rating</button>
            {
                hide && (
                    <div className='rating-input'>
                        <input type="number"
                            placeholder='1-10'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)} />
                        <button onClick={() => { submitrating(movieId); setHide(false); }}>Rate</button>
                    </div>
                )
            }
        </div>
    )
}

export default PostRating