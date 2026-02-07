<?php
    function updateMetaDate() {
        $currentDate = date("Y-m-d");
        echo '<meta name="date" content="' . $currentDate . '" scheme="YYYY-MM-DD">';
    }
    updateMetaDate()
?>