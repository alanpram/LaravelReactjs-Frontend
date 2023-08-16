import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonPageTitle = () => {
    return(
        <div className='skeleton-card'>
            <Skeleton className='skeleton-page-title'/>
        </div>
    );
}

export default SkeletonPageTitle;