<template>
    <div class="card mt-3">
        <div class="card-body">
            <div class="card-title">
                <h3>Chat socket.io Nodejs vuejs</h3>
            </div>
            <div class="card-body">
                <div class="messages" v-for="(msg, index) in messages" :key="index">
                    <p class="text-left">
                        <span class="font-weight-bold">{{msg.user}}</span>
                        {{msg.message}}
                    </p>

                </div>
            </div>
        </div>
        <div class="card-footer">
            <form @submit.prevent="sendMessage">
                <div class="form-group">
                    <label for="message">Message: </label>
                    <input type="text" v-model="message" class="form-control">
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
</template>
<script>
    import io from 'socket.io-client';

    export default{
        data() {
            return {
                use: '',
                message: '',
                messages: [],
                socket: io('https://localhost:3000')
            }
        },
        methodis: {
            sendMessage(e) {
                e.preventDefault();
                this.socket.emit('sendMessage', {
                    user: this.user,
                    message: this.message
                });
                this.newMessage =''
            }
        },
        mounted() {
            this.socket.on('message', (data) => {
                this.messages.push({
                    message: data.message,
                    user: data.user
                })
            })
        }
    }
</script>