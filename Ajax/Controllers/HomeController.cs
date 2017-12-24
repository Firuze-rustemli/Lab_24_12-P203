using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ajax.Models;


namespace Ajax.Controllers
{
    public class HomeController : Controller
    {
        AjaxEntities1 db = new AjaxEntities1();

        public ActionResult Index()
        {

            ViewBag.marka = db.Marka.ToList();
            return View(); 

        }

        public ActionResult getModel(int id)
        {
            string result = "";
            List<Madel> models = db.Madel.Where(a => a.marka_id == id).ToList();

            foreach(Madel item in models)
            {
                result += "<option>" + item.name + "</option>";
            }
            return Content(result);
        }

        public ActionResult getJson(int id)
        {
            var list = db.Madel.Where(a => a.marka_id == id).Select(m=> new { 
                m.id,
                m.name
            }).ToList();

            return Json(list, JsonRequestBehavior.AllowGet);
        }

    }
}