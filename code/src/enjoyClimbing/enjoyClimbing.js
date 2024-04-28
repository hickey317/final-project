import React, { useState } from 'react'
import Index from '../document/Index'
import VideosArea from './videosArea'
import SearchArea from './searchArea';

const EnjoyClimbing = () => {
    return (
        <div>
            <header>
                <Index />
            </header>
            <main>
                <SearchArea/>
                <VideosArea />
            </main>
        </div>
    );
};

export default EnjoyClimbing;
