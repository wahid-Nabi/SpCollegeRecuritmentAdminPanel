using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wiser.API.Entities.DTO
{
    public class NewsNotificationDTO
    {
        public Guid Id { get; set; }
        public string NewsImagePath { get; set; }
        public string Title { get; set; }
        public string FileLink { get; set; }
        public bool HasContent { get; set; } = false;
        public string Content { get; set; }
        public DateTime PublishDate { get; set; }
        public bool Enabled { get; set; } = true;
        public string Slug { get; set; }
        public Guid? DepartmentId { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
