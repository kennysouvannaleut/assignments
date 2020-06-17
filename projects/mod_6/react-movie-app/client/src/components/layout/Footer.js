import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default () => (
    <Layout>
        <Footer style={{ 
            textAlign: 'center',
            fontSize: '8pt',
            background: 'whitesmoke'
        }}
            >©2020 by Kenny Souvannaleut
        </Footer>
    </Layout>
);
