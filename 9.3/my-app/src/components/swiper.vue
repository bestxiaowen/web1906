<template>
    <div>
        <div class="wrap" v-data="ivalue">
            <div class="swiper" id="swiper">
                <div class="point"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [Number, String],
            default: 0
        }
    },
    data() {
        return {
            ivalue: this.value
        };
    },
    watch: {
        value(n) {
            this.ivalue = n;
        },
        ivalue(n) {
            this.$emit("input", n);
        }
    },
    directives: {
        data: {
            bind(el, binding, vnode) {
                // el.style.arg = binding.value.arg;
                let defaultX = parseInt(binding.value);

                el.childNodes[0].style.width = defaultX * 3 + "px";

                let point = el.childNodes[0].childNodes[0];

                point.addEventListener("mousedown", e => {
                    el.childNodes[0].style.transitionDuration = 0 + "s";
                    function a(e) {
                        var x = e.clientX;
                        // swiper距离屏幕左边的距离
                        var left = document.getElementsByClassName("swiper")[0]
                            .offsetLeft;
                        if (x - left > 300) {
                            el.childNodes[0].style.width = 300;
                            if (vnode.context[binding.expression]) {
                                vnode.context[binding.expression] = 100;
                            }
                        } else if (x - left < 0) {
                            el.childNodes[0].style.width = 0;
                            if (vnode.context[binding.expression]) {
                                vnode.context[binding.expression] = 0;
                            }
                        } else {
                            el.childNodes[0].style.width = x - left + "px";
                            console.log(x - left);
                            if (vnode.context[binding.expression]) {
                                vnode.context[binding.expression] = parseInt(
                                    (x - left) / 3
                                );
                            }
                        }
                    }
                    document.addEventListener("mousemove", a);
                    document.addEventListener("mouseup", e => {
                        document.removeEventListener("mousemove", a);
                    });
                });
                console.log(el.childNodes[0].childNodes[0]);
                el.addEventListener("click", e => {
                    el.childNodes[0].style.transitionDuration = 0.3 + "s";
                    var i = document.getElementsByClassName("swiper");
                    if (e.target.className === "point") {
                        // alert(1)
                    } else {
                        var x = e.offsetX;
                        var nowX = parseInt(x);
                        var persent = parseInt(nowX / 3);
                        el.childNodes[0].style.width = nowX + "px";

                        if (vnode.context[binding.expression]) {
                            vnode.context[binding.expression] = persent;
                        }
                    }
                });
            },
            inserted() {},
            update(el, binding, vnode) {
                let defaultX = parseInt(binding.value);
                el.childNodes[0].style.width = defaultX * 3 + "px";
            },
            componentUpdated() {},
            unbind() {}
        }
    }
};
</script>

<style scoped>
.wrap {
    width: 300px;
    height: 4px;
    border-radius: 2px;
    background-color: #e8eaec;
    cursor: pointer;
    margin: 20px 10px;
}

.wrap .swiper {
    /* width: 100px; */
    height: inherit;
    border-radius: inherit;
    background-color: #57a3f3;
    position: relative;
    /* transition-duration: .3s; */
}

.duration {
    transition-duration: 0.3s;
}

.wrap .swiper .point {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #57a3f3;
    background-color: white;
    transform: translateX(6px);
    right: 0;
    top: -5px;
    transform-origin: -100% 50%;
    transition-duration: 0.2s;
}

.wrap .swiper .point:hover {
    transform: scale(1.3);
}
</style>