import { observable, action } from "mobx";
import React from "react";

const NO_RESULT = -1


export default class CommentsStore {
    @observable
    comments = [{
        id: 4443443,
        comment: "super książka!",
    }];



    @action
    addComment = comment => this.comment.push(comment);

    @action
    removeComment = id => {
        const index = this.comments.findIndex(comment => comment.id === id)


        if (id === NO_RESULT) {
            return
        }


        this.comments = this.comments.filter(comment => comment.id !== id)
    }
}