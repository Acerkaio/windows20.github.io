var shuts = 0;
        function shutdown() {
            if (shuts == 0) {
                shuts = 1;
                document.getElementsByClassName('shutdowns')[0].style.display = 'block';
                document.getElementsByClassName('shutdowns')[0].style.animation = 'windwos-start .1s ease-in-out';
            } else {
                shuts = 0;
                document.getElementsByClassName('shutdowns')[0].style.animation = '';
                document.getElementsByClassName('shutdowns')[0].style.display = 'none';
            }
        }
        var ids = 0;
        var lazy = [0, 0, 0, 0, 0, 0, 0];
        var IfStartStart = 0;
        document.getElementById('start-windows').style.display = 'none';

        // setTimeout(() => {
        //     document.getElementById('start-windows').style.display = 'none';
        // }, 5980);
        function FocusClick(i) {
            ids = i;
            if (ids == 4 && lazy[3] == 0) {
                lazy[3] = 1;
                setTimeout(() => {
                    lazy[3] = 0;
                }, 20);
            }
            if (ids == 3 && lazy[2] == 0) {
                lazy[2] = 1;
                setTimeout(() => {
                    lazy[2] = 0;
                }, 20);
            }
            if (ids != 3 && lazy[2] == 0) {
                document.getElementById('rg-menu').style.display = 'none';
                document.getElementById('rg-menu').style.opacity = '0';
            }
            if (ids == 2 && lazy[1] == 0) {
                lazy[1] = 1;
                if (IfStartStart == 1) {
                    startwindowsFocus();
                } else {
                    IfStartStart = 1;
                }
                setTimeout(() => {
                    lazy[1] = 0;
                }, 20);
            }

            if (ids != 2 && lazy[1] == 0 && lazy[3] == 0) {
                startwindowsFocus();
                //window.alert(i);
            }


        }
        function start_asynchronous() {
            var n = 0;
            while (document.getElementsByClassName('start-rg-row')[n]) {
                document.getElementsByClassName('start-rg-row')[n].style.animation = '';
                document.getElementsByClassName('start-rg-row')[n].style.display = 'none';
                n++;
            }
            setTimeout(() => {
                document.getElementsByClassName('start-rg-row')[0].style.display = 'flex';
                document.getElementsByClassName('start-rg-row')[0].style.animation = 'start-rg .35s ease-in-out';
            }, 220);
            setTimeout(() => {
                document.getElementsByClassName('start-rg-row')[1].style.display = 'flex';
                document.getElementsByClassName('start-rg-row')[1].style.animation = 'start-rg .35s ease-in-out';
            }, 290);
        }
        function StartWindows() {
            if (IfStartStart == 1) {
                IfStartStart = 0;
                return;
            }
            $(':root').css('--start-width', `350px`);
            $(':root').css('--start-av-top', `-80px`);
            $(':root').css('--start-av-width', `152px`);
            document.getElementById('dock-start').style.left = 'calc(50vw - 175px)';
            document.getElementById('dock-start').style.opacity = '1';

            FocusClick(2);
            document.getElementById("dock-start").style.display = 'block';
            document.getElementById("dock-start").style.animation = 'dock-start .15s ease-in-out';
            document.getElementsByClassName('dock-icon')[0].style = 'background-color: #fffa;';
            setTimeout(() => {
                document.getElementById("dock-start").style.animation = '';
                $(':root').css('--start-width', `900px`);
                $(':root').css('--start-av-top', `-70px`);
                document.getElementById('dock-start').style.left = 'calc(50vw - 450px)';
                $(':root').css('--start-av-width', `132px`);
                start_asynchronous();
            }, 180);
        }

        function startwindowsFocus() {
            //window.alert('3');
            $(':root').css('--start-width', `350px`);
            $(':root').css('--start-av-top', `-80px`);
            $(':root').css('--start-av-width', `152px`);
            document.getElementById('dock-start').style.left = 'calc(50vw - 175px)';
            IfStartStart = 0;
            document.getElementById('dock-start').style.opacity = '0';
            document.getElementById("dock-start").style.animation = 'dock-end .15s ease-in-out';

            setTimeout(() => {
                document.getElementById("dock-start").style.display = 'none';
                document.getElementsByClassName('dock-icon')[0].style.backgroundColor = '';
            }, 140);
        }

        StartMain();
        function locking() {

        }
        function StartMain() {
            document.getElementById('lock').style.animation = 'lock-start 1.5s cubic-bezier(.23,1,.32,1)';
            setTimeout(() => {
                document.getElementById('lock').style.display = 'none';
                document.getElementById('lock').style.animation = '';
            }, 1480);
        }
        function enter() {
            if (event.keyCode == '13') {
                if (document.getElementById('input-password').value == 'Acerkaio')
                    // window.alert('已经解锁');
                    StartMain();
                else {
                    document.getElementById('input-password').value = '';
                    document.getElementById('input-password').style.animation = 'false-password .7s ease';
                    setTimeout(() => {
                        document.getElementById('input-password').style.animation = '';
                    }, 690);
                }
            }
        }