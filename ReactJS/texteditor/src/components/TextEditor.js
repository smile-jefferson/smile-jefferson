import React , {Component} from 'react'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {EditorState , convertToRaw} from 'draft-js'

import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';


export default class TextEditor extends Component {
    
    state={
        editorState: EditorState.createEmpty(),
    };
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render() {
        const {editorState} = this.state
        // console.log('editorState :' , editorState.getCurrentContent())
        // console.log('convertToRaw() : ' , convertToRaw(editorState.getCurrentContent()))
        // console.log('convertToRaw() : ' , draftToHtml(convertToRaw(editorState.getCurrentContent())))
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        return(
            <div>
                <h1>Text Editor</h1>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        );
    }
}