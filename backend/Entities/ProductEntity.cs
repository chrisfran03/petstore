using System.ComponentModel.DataAnnotations;

namespace backend.Entities
{
    public class ProductEntity
    {
        [Key]
        public long Id { get; set; }

        public string Brand { get; set; }

        public string Title { get; set; }

    }
}