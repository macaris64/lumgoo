'use client';
import React, {ReactElement, useState} from 'react';

import './tab.css';

interface TabPanelProps {
    title: string;
    children: React.ReactNode;
}

interface TabsProps {
    children: ReactElement<TabPanelProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {children.map((child, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTab === index ? 'active-tab' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {child.props.title}
                    </div>
                ))}
            </div>
            <div className="tab-content">{children[activeTab]}</div>
        </div>
    );
};

export default Tabs;
