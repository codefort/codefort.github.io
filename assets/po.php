<?php
            $url  = "http://".$_SERVER['HTTP_HOST']."/"; // ����� �����
            
            echo $url; // �������� URL
            
            echo '<br />';
            
            echo implode('', array_slice(explode('/', $_SERVER['PHP_SELF']), 0, -1));
        ?>