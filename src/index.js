import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" comment="Nice te!" avatar={Faker.image.avatar()}/>
            <CommentDetail author="Jhon" comment="Nice sa!" avatar={Faker.image.avatar()}/>
            <CommentDetail author="Rands" comment="Nice blog!" avatar={Faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
