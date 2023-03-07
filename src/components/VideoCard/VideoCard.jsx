import React from 'react';
import { formatAgo } from '../../util/date';
import { useNavigate } from 'react-router-dom';

function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li
      className={'cursor-pointer transition-transform hover:scale-110'}
      onClick={handleClick}
    >
      <img className={'w-full'} src={thumbnails.medium.url} alt={title} />
      <div>
        <p className={'font-semibold my-2 line-clamp-2'}>{title}</p>
        <p className={'text-sm opacity-80'}>{channelTitle}</p>
        <p className={'text-sm opacity-80'}>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

export default VideoCard;
