import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
    return(
        <div className='skeleton-card'>
            <Skeleton className='skeleton-content'/>
        </div>
    );
}

export default SkeletonCard;