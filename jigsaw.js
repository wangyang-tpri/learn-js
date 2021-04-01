
/**
 * ����ͼƬ�϶�ģ����ѵ�
 *  
 *  1.���������canvas��������׼ȷ�Ľ�ȡĳһ���ֵ�ͼ��   ���
 *  2.��������û��������ͼ������������϶���һ���ƶ�    ���
 *  3.��������ж����յ��ƶ�λ���Ƿ���ȷ
 *  
 *  ������ʱ �϶�ͼ����ɫ�仯                            hover
 *  ����϶�ʱ slidemask��ɫ�仯                          active
 *  ����϶�ʧ�� �϶�ͼ���slidermask����ɫ����ʧ��ɫ     fail
 *  ����϶��ɹ� �϶�ͼ���slidermask����ɫ���ɳɹ�ɫ     success
 */
(function (window) {
    /**
     * 
     * @param { callback } onFile       ʧ�ܻص� 
     * @param { callback } onSuccess    �ɹ��ص�
     * @param { string }   el           ���canvasԪ�ص�����
     */
    function DragImage(opts) {
        this.correctImage = false;
        this.height = 155;
        this.width = 310;
        this.el = opts.el;
        this.onSuccess = opts.onsuccess
        this.l = 42;
        this.r = 9;
        this.PI = Math.PI;
        this.L = this.l + this.r * 2 + 3;
        this.openContent = '���һ������ƴͼ'
        // ���û���Ĵ�С��λ��
    }
    function getRoundNumber(start, end) {
        /**
         * Math.round() ������������������
         * Math.random() ����0-1֮��������
         */
        return Math.round(Math.random() * (end - start) + start);
    }
    function createImage(onload) {
        var image = document.createElement('img')
        image.crossOrigin = "Anonymous"
        image.onload = onload
        image.src = getRoundImage()
        return image
    }
    function getRoundImage() {
        return "https://picsum.photos/300/150/?image=" + getRoundNumber(0, 1084)
    }
    function createElement(tarName, className) {
        var ele = document.createElement(tarName)
        ele.className = className
        return ele
    }
    function addClass(tar, className) {
        tar.classList.add(className)
    }
    function removeClasss(tar, className) {
        tar.classList.remove(className)
    }
    function createCanvas(height, width) {
        var canvas = document.createElement('canvas')
        canvas.height = height;
        canvas.width = width;
        return canvas
    }
    /**
     * @description ����ƴͼ��ȱ�𲿷�
     * @param { object } ctx    ���� 
     * @param { number } x      x��ľ���
     * @param { number } y      y��ľ��� 
     * @param { string } option ����ʽ
     *  
     */
    function draw(ctx, x, y, l, r, PI, option) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
        ctx.lineTo(x + l, y)
        ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
        ctx.lineTo(x + l, y + l)
        ctx.lineTo(x, y + l)
        ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
        ctx.lineTo(x, y)
        ctx.lineWidth = 2
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.stroke()
        ctx[option]()
        ctx.globalCompositeOperation = 'overlay'
    }
    function sum(x, y) {
        return x + y;
    }
    function square(x, y) {
        return x * y;
    }
    DragImage.prototype = {

        init: function () {
            //�Թ��캯���еķ������г�ʼ��
            this.initDom()
            this.initImage()
            this.bindEvents()
        },
        initDom: function () {

            var canvas = createCanvas(this.height, this.width)
            var block = canvas.cloneNode(true)
            var slider = createElement('div', 'slider')
            var sliderIcon = createElement('span', 'sliderIcon')
            var refreshIcon = createElement('div', 'refreshIcon')
            var text = createElement('span', 'sliderText')
            var sliderContainer = createElement('div', 'sliderContainer')
            var sliderMask = createElement('div', 'sliderMask')
            text.innerHTML = this.openContent
            block.className = 'block'

            this.el.appendChild(canvas)
            this.el.appendChild(block)
            this.el.appendChild(sliderContainer)
            this.el.appendChild(refreshIcon)
            sliderContainer.appendChild(text)
            sliderContainer.appendChild(sliderMask)
            sliderMask.appendChild(slider)
            slider.appendChild(sliderIcon)
            Object.assign(this, {
                canvas,
                slider,
                block,
                refreshIcon,
                text,
                sliderMask,
                sliderContainer,
                canCtx: canvas.getContext('2d'),
                bloCtx: block.getContext('2d')
            })
        },
        initImage: function () {
            var self = this;

            var image = createImage(function () {
                self.draw()
                self.canCtx.drawImage(image, 0, 0, self.width, self.height)
                self.bloCtx.drawImage(image, 0, 0, self.width, self.height)
                var y = self.y - self.r * 2 - 1
                var imageData = self.bloCtx.getImageData(self.x - 3, y, self.L, self.L)
                self.block.width = self.L;
                self.bloCtx.putImageData(imageData, 0, y)
            })
            self.image = image
        },
        bindEvents: function () {
            var self = this;
            self.el.onselectstart = function(){
                return false
            }
            self.refreshIcon.onclick = function () {
                self.reset()
            }
            var originX, originY, isMouseDown = false, trail = [];
            // ���ŵ��Ϸſ�����ʱ�ĳ�ʼx y�ľ���
            var handleStart = function (e) {
                originX = e.clientX || e.touches[0].clientX
                originY = e.clientY || e.touches[0].clientY
                isMouseDown = true
            }
            /**
             * @description �ж�����ƶ��ľ���
             * @param { number } move_x ����ƶ���x����� 
             * @param { number } move_y ����ƶ���y�����
             * @returns 
             */
            var judgeDistance = function (move_x, move_y) {
                if (move_x < 0 || (move_x + 38) >= self.width) return false
                self.block.style.left = move_x + 'px'
                self.slider.style.left = move_x + 'px'
                var blockLeft = (self.width - 40 -20) / (self.width - 40) * move_x;
                self.block.style.left = blockLeft + 'px' 
                addClass(self.sliderContainer, 'sliderContainer_active')
                self.sliderMask.style.width = move_x + 'px'
            }
            // ��꿪ʼ�϶�ʱ��x y ���ƶ�����
            var handleMove = function (e) { 
                if (!isMouseDown) return;
                var client_x = e.clientX || e.touches[0].clientX
                var client_y = e.clientY || e.touches[0].clientY
                var move_x = client_x - originX
                var move_y = client_y - originY
                judgeDistance(move_x, move_y)
                trail.push(move_y)
            }

            var handleOver = function (e) {
                if (!isMouseDown) return false
                isMouseDown = false;
                var client_x = e.clientX || e.changedTouches[0].clientX
                if (client_x == originX) return false
                removeClasss(self.sliderContainer, 'sliderContainer_active')
                self.trail = trail
                var spliced, verified;
                spliced = self.verify().spliced
                verified = self.verify().verified
                if (spliced) {
                    if (verified) {
                      addClass(self.sliderContainer, 'sliderContainer_success')
                      typeof self.onSuccess === 'function' && self.onSuccess()
                    } else {
                      addClass(self.sliderContainer, 'sliderContainer_fail')
                      self.text.innerHTML = '����һ��'
                      self.reset()
                    }
                  } else {
                    addClass(self.sliderContainer, 'sliderContainer_fail')
                    typeof this.onFail === 'function' && this.onFail()
                    setTimeout(function(){
                        self.reset()
                    }, 1000)
                  }
            }
            self.slider.addEventListener('mousedown', handleStart)
            self.slider.addEventListener('mouseover', handleMove)
            document.addEventListener('mouseup', handleOver)
            self.slider.addEventListener('touchstart', handleStart)
            self.slider.addEventListener('touchmove', handleMove)
            document.addEventListener('touchend', handleOver)
        },
        draw: function () {
            var _L = this.L + 10;
            this.x = getRoundNumber(_L, this.width - _L)
            this.y = getRoundNumber(10 + this.r * 2, this.height - _L)
            draw(this.canCtx, this.x, this.y, this.l, this.r, this.PI, 'fill')
            draw(this.bloCtx, this.x, this.y, this.l, this.r, this.PI, 'clip')
        },
        reset: function () {
            this.sliderContainer.className = 'sliderContainer'
            this.block.style.left = 0
            this.slider.style.left = 0
            this.sliderMask.style.width = 0
            this.clean()
            this.image.src = getRoundImage()
        },
        clean: function () {
            this.canCtx.clearRect(0, 0, this.width, this.height)
            this.bloCtx.clearRect(0, 0, this.width, this.height)
            this.block.width = this.width
        },
        verify: function () {
            var arr = this.trail // ��ֵ
            // ���������ν������е�Ԫ���ڻص�������ִ��һ�Σ������ϴλص������е�ֵ�ŵ�һ���ݴ�����
            // �����´λص����������������һ�λص������ķ���ֵ
            var average = arr.reduce(sum) / arr.length //����y���ƶ���ƽ��ֵ 
            // map���ص��ǽ������е�ÿ��Ԫ���ڻص�������ִ����һ���Ľ������ɵ�������
            var deviations = arr.map(function(x){
                return x - average
            })
            /**
             * Math��һ�����ö���������һ����������ӵ��һЩ���õ���ѧ���Ժ���ѧ���㹫ʽ
             */
            var stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length)  //����ƽ����
            var left = parseInt(this.block.style.left)
            return {
                spliced: Math.abs(left - this.x) < 10,  // ���ص��Ǻ����ľ���ֵ
                // ���stddevΪ0�Ļ���֤��y������û�в��������ܲ�����Ϊ����
                verified: stddev !== 0,   

            }
        }
    }
    window.drawImage = {
        init: function (opts) {
            return new DragImage(opts).init()
        }
    }
})(window)
