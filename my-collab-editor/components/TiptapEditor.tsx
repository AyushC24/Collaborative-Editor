'use client'

import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from "@tiptap/extension-collaboration";
import * as Y from 'yjs';
import {HocuspocusProvider} from "@hocuspocus/provider";
import {useEffect, useState} from "react";
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'

const Tiptap = () => {

    const [provider] = useState(() => new HocuspocusProvider(
        {
            url: 'ws://0.0.0.0:1234',
            name: 'my-unique-room-name-123',
        }
    ));

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                // The StarterKit includes the History extension by default.
                // We need to disable it so Y.js can handle the Undo/Redo.
                //@ts-ignore
                history: false, // IMPORTANT: Disable local history
            }),
            // 2. REGISTER THE COLLABORATION EXTENSION
            Collaboration.configure({
                document: provider.document, // Use the doc from the provider
            }),
            // CollaborationCursor.configure({
            //     provider,
            //     user: {
            //         name: 'User ' + Math.floor(Math.random() * 100),
            //         color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            //     },
            // }),
        ],
        editorProps: {
            attributes: {
                class: 'prose prose-lg max-w-none focus:outline-none',
            }
        },
        immediatelyRender: false
    })

    useEffect(() => {
        return () => provider.destroy();
    }, [provider]);

    if (!editor) return null;

    return (
        <div className="flex justify-center bg-gray-100 min-h-screen py-10">
            {/* The "Paper" Container */}
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">

                {/* Toolbar Header (Visual only for now) */}
                <div className="bg-gray-50 border-b border-gray-200 p-3 flex gap-2 items-center">
                    <div className="flex space-x-1">
                        <span className="w-3 h-3 rounded-full bg-red-400"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    </div>
                    <span className="ml-4 text-sm font-medium text-gray-500">
                        Untitled Document
                    </span>
                    <span className="ml-auto text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full animate-pulse">
                        ● Online
                    </span>
                </div>

                {/* The Editor Area */}
                <div className="p-8 sm:p-12">
                    <EditorContent editor={editor}/>
                </div>
            </div>
        </div>
    )
}

export default Tiptap