import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
      //User is  the name given in modal,ObjectId is for refernces
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], //[] is used for array,Array of SubTodods
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
