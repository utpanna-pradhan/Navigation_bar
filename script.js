var navstatus = 0; /*hidden*/

function opennav()
{
    if(! navstatus) /*navstatus is not hidden */
    {
        $('.main_container').css('width' , '100%')
        $('li').css('display' , 'block')
        navstatus = 1
    }
    else
    {
        $('.main_container').css('width' , '0')
        $('li').css('display' , 'none')
        navstatus = 0
    }
}