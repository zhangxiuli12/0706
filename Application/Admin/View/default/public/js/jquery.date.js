/**
 * Created by Administrator on 2017/7/6.
 */
DateInput=(function ($) {
    function DateInput(el,opts) {
        var defaultDateStr;
        var  defaultDate;
        if(opts){
            defaultDateStr=opts.defaultDateStr;
        }
        if(defaultDateStr){
            if(typeof (defaultDateStr)=='string' && defaultDateStr!==''){
                defaultDate=new Date(defaultDateStr);
            }
        }
            if(typeof (opts)!='object') opts={};
            $.extend(this,DateInput.DEFAULT_OPTS,opts);
            this.input=$(el);
            this.bindMethodsToObj('show','hide','hideIfClickOutside','keydownHandler','selectDate');
            this.build();
            this.selectDate(defaultDate||new Date());
            this.hide();
    };

})(jQuery);