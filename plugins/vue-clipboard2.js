import Vue from 'vue';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard);
Vue.mixin({
    methods:{
        doCopy () {
            let onCopy = this.onCopy;
            this.$copyText(this.output).then(function (e) {
                onCopy(true);
            }, function (e) {
                onCopy(false);
            })
        },
        onCopy (isSuccess) {
            this.$buefy.snackbar.open({
                message: isSuccess ? 'Successfully copied output!' : 'Failed to copied output!',
                type: isSuccess ? 'is-success' : 'is-warning',
                position: 'is-top',
                actionText: 'Close',
                queue: false
            })
        }
    }
})