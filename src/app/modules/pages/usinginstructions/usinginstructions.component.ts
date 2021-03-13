import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/@core/Component/BaseComponent/BaseComponent';
import { StaticPageDto } from 'src/app/@AppService/models/static-page.model';

@Component({
  selector: 'app-usinginstructions',
  templateUrl: './usinginstructions.component.html',
  styleUrls: ['./usinginstructions.component.scss']
})
export class UsingInstructionsComponent extends BaseComponent implements OnInit {
  usingInstructionPage: StaticPageDto = {
    id: 1,
    pageName: 'تعليمات الإستخدام ',
    content: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
    الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
    المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
    إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
    للنص أو شكل توضع الفقرات هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
    للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن
    طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها ولذلك يتم
    استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
    عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
    القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
    طبيعياَ هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص`
  };

  constructor(private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }
  ngOnInit() {}


}
